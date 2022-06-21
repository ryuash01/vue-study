import { reactive } from 'vue';
import { WORKFLOW_STEPS_MAP, WorkflowType } from '@/constants/workflow';
import { WithLoading } from '@/interfaces/with-loading';
import { WithError } from '@/interfaces/with-error';
import { useGrpcRequest } from '@/composables/use-grpc-request';
import cultusClient from '@/grpc/cultus.client';
import signumClient from '@/grpc/signum.client';
import { Profiles } from '@finco-services/cultus/client_pb';
import { Sessions } from '@finco-services/signum/client_pb';
import GetSessionsRequest = Sessions.GetSessionsRequest;

/**
 * Steps to create a new workflow:
 * 1. add a new enum to WorkflowType in src/constants/workflow.ts
 * 2. define WorkflowStep[] steps and add to WORKFLOW_STEPS_MAP
 * 3. create the corresponding vue component for workflow content,
 *    and add to WORKFLOW_COMPONENT_MAP in WorkflowPanel.vue
 * 4. write async method named as onSubmitWorkflow inside content component
 */

export interface WorkflowStep {
  title: string; // heading title for this step
  footer: string; // button text on the footer
}

export interface FieldToConfirm {
  key: string;
  value: string | number;
}
export interface WorkflowResponse extends WithError {
  success: boolean;
}

/**
 * Global workflow state
 */
export interface WorkflowState extends WithLoading, WithError {
  type: WorkflowType;
  context?: any;
  sidePanelOpen: boolean;
  okToProceed: boolean;
  steps: WorkflowStep[];
  currentStep: number;
  profileGraph?: Profiles.ProfileGraph.AsObject;
  sessions: Sessions.Session.AsObject[];
}

export interface WorkflowStore {
  state: Readonly<WorkflowState>;
  toggleSidePanel: (open: boolean) => void;
  toggleLoading: (loading: boolean) => void;
  initiateWorkflow: (type: WorkflowType, context?: any) => void;
  goToStep: (stepNumber: number) => void;
  clearProfileGraph: () => void;
  getProfileGraph: (cuid: string) => Promise<void>;
  getSessions: (cuid: string) => Promise<void>;
  setError: (error: Error) => void;
  setOkToProceed: (proceed: boolean) => void;
}

const state = reactive<WorkflowState>({
  loading: false,
  type: WorkflowType.UNKNOWN_WORKFLOW,
  sidePanelOpen: false,
  okToProceed: true,
  steps: [],
  sessions: [],
  currentStep: 0
});

export const useWorkflow = (): WorkflowStore => {
  const toggleSidePanel = (open: boolean): void => {
    state.sidePanelOpen = open;
    if (!open) {
      state.steps = [];
      state.type = WorkflowType.UNKNOWN_WORKFLOW;
      state.currentStep = 0;
      state.error = null;
      state.context = undefined;
    }
  };

  const toggleLoading = (loading: boolean): void => {
    state.loading = loading;
  };

  const initiateWorkflow = (type: WorkflowType, context?: any) => {
    state.type = type;
    state.context = context;
    state.steps = WORKFLOW_STEPS_MAP[type];
    state.sidePanelOpen = true;
    state.currentStep = 0;
  };

  const goToStep = (stepNumber: number) => (state.currentStep = stepNumber);

  const getProfileGraph = async (cuid: string): Promise<void> => {
    state.loading = true;
    const { response, error } = await useGrpcRequest(
      (request, metadata) => cultusClient.getProfileGraphs(request, metadata),
      new Profiles.GetProfileGraphsRequest().addIncludeCuids(cuid)
    );
    state.error = error;
    state.loading = false;
    state.profileGraph = response?.getProfileGraphsList()[0]?.toObject();
  };

  const getSessions = async (cuid: string): Promise<void> => {
    state.loading = true;
    const { response, error } = await useGrpcRequest(
      (request, metadata) => signumClient.getSessions(request, metadata),
      new GetSessionsRequest().setIncludeCuidsList([cuid])
    );
    state.error = error;
    state.loading = false;
    state.sessions = response?.toObject().sessionsList || [];
  };

  const clearProfileGraph = (): void => (state.profileGraph = undefined);

  const setError = (error: Error) => (state.error = error);

  const setOkToProceed = (proceed: boolean) => (state.okToProceed = proceed);

  return {
    state,
    toggleSidePanel,
    toggleLoading,
    initiateWorkflow,
    goToStep,
    getProfileGraph,
    getSessions,
    clearProfileGraph,
    setError,
    setOkToProceed
  };
};
