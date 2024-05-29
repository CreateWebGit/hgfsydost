/*
import React from 'react'
import { useField } from 'node_modules/@payloadcms/ui/dist/forms/useField'

export const QuestionRowLabel = ({ data, index, path: arrayFieldPath }) => {
  // arrayFieldPath example: "questions.0"
  const path = `${arrayFieldPath}.question`
  const { value } = useField({ path })

  if (value) {
    // assuming question is a text field inside the array
    return data.question
  }

  return `Question ${index + 1}`
}
*/
