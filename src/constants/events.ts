export enum SLIDER {
  SLIDER_SHOW = 'SLIDER_SHOW',
  SLIDER_HIDE = 'SLIDER_HIDE'
}

export enum WORKFLOW {
  WORKFLOW_NEXT = 'WORKFLOW_NEXT',
  WORKFLOW_PREV = 'WORKFLOW_PREV'
}

export type ALL_EVENTS = (
  SLIDER |
  WORKFLOW
);

export type MITT_EVENT_TYPES = {
  [key in ALL_EVENTS]: any;
}
