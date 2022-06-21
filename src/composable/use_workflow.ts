import { ref } from 'vue';

export type WorkflowState = {
  step: number;
  total: number;
}

export const useWorkflow = (total: number) => {
  const state = ref<WorkflowState>({
    step: 0,
    total
  });

  const handleNextStep = () => {
    console.log('ive been called')
    if (state.value.step < state.value.total) {
      state.value.step++;
    }
  }

  const handlePrevStep = () => {
    if (state.value.step < state.value.total) {
      state.value.step--;
    }
  }

  const handleStep = (newStep: number) => {
    if (newStep > 0 && newStep < state.value.total) {
      state.value.step = newStep
    }
  }

  return {
    state,
    handleNextStep,
    handlePrevStep,
    handleStep
  }
}
