export const TaskStatus = {
  PENDING : 'PENDING',
  INPROGRESS : 'INPROGRESS',
  DONE : 'DONE',
  ACHIEVED : 'ACHIEVED',
} as const;

export type TaskStatusEnum = typeof TaskStatus[keyof typeof TaskStatus]
