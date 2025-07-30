import { formatExp } from "../format/index.ts"
import { lambdaIsDefined, type Neutral, type Value } from "../value/index.ts"

export function formatValue(value: Value): string {
  switch (value.kind) {
    case "NotYet": {
      return formatNeutral(value.neutral)
    }

    case "Lambda": {
      if (lambdaIsDefined(value)) {
        return value.definedName
      }

      return `(lambda (${value.name}) ${formatExp(value.ret)})`
    }
  }
}

export function formatNeutral(neutral: Neutral): string {
  switch (neutral.kind) {
    case "Var": {
      return neutral.name
    }

    case "Apply": {
      const target = formatNeutral(neutral.target)
      const arg = formatValue(neutral.arg)
      return `(${target} ${arg})`
    }
  }
}
