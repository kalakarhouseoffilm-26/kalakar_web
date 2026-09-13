export function useFormTextarea(id: string) {
  return {
    inputId: id,
    errorId: `${id}-error`,
  }
}
