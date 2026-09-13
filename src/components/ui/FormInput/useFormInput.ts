export function useFormInput(id: string) {
  return {
    inputId: id,
    errorId: `${id}-error`,
  }
}
