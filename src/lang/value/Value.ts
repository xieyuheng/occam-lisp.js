import { type Env } from "../env/index.ts"
import { type Exp } from "../exp/index.ts"
import { type Mod } from "../mod/index.ts"
import { type Neutral } from "../value/index.ts"

export type Value = NotYet | Lambda | Lazy | DelayedApply

export type NotYet = {
  kind: "NotYet"
  neutral: Neutral
}

export type Lambda = {
  kind: "Lambda"
  mod: Mod
  env: Env
  name: string
  ret: Exp
  definedName?: string
}

export type Lazy = {
  kind: "Lazy"
  mod: Mod
  env: Env
  exp: Exp
  value?: Value
}

export type DelayedApply = {
  kind: "DelayedApply"
  target: Value
  arg: Value
}

export function NotYet(neutral: Neutral): NotYet {
  return {
    kind: "NotYet",
    neutral,
  }
}

export function Lambda(mod: Mod, env: Env, name: string, ret: Exp): Lambda {
  return {
    kind: "Lambda",
    mod,
    env,
    name,
    ret,
  }
}

export function Lazy(mod: Mod, env: Env, exp: Exp): Lazy {
  return {
    kind: "Lazy",
    mod,
    env,
    exp,
  }
}

export function DelayedApply(target: Value, arg: Value): DelayedApply {
  return {
    kind: "DelayedApply",
    target,
    arg,
  }
}
