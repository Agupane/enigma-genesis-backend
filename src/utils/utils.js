export const getTaskStatus = (computation) => {
  const { completedOn, errorReportedOn } = computation
  if(!completedOn) {
    if(errorReportedOn) {
      // Error tasks
      return 'Error'
    }
    // Task is pending
    return 'Pending'
  }
  return 'Completed'
}
