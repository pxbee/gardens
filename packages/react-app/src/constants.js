import { bigNum } from './lib/bigNumber'

export const CONTEXT_ID = '1hive'

export const PROPOSAL_STATUS_ACTIVE_STRING = 'Active' // TODO: Convert to symbol
export const PROPOSAL_STATUS_CANCELLED_STRING = 'Cancelled'
export const PROPOSAL_STATUS_EXECUTED_STRING = 'Executed'

export const PROPOSAL_STATUS_CANCELLED = 3

export const PROPOSAL_SUPPORT_SUPPORTED = 1
export const PROPOSAL_SUPPORT_NOT_SUPPORTED = 2

export const PCT_BASE = bigNum(1)
export const QUICK_STAKE_PCT = bigNum(5, 16)

export const ZERO_ADDR = '0x0000000000000000000000000000000000000000'

export const VOTE_ABSENT = 'VOTE_ABSENT'
export const VOTE_YEA = 'VOTE_YEA'
export const VOTE_NAY = 'VOTE_NAY'

export const VOTE_STATUS_UPCOMING = Symbol('VOTE_STATUS_UPCOMING')
export const VOTE_STATUS_ONGOING = Symbol('VOTE_STATUS_ONGOING')
export const VOTE_STATUS_DELAYED = Symbol('VOTE_STATUS_DELAYED')
export const VOTE_STATUS_REJECTED = Symbol('VOTE_STATUS_REJECTED')
export const VOTE_STATUS_ACCEPTED = Symbol('VOTE_STATUS_ACCEPTED')
export const VOTE_STATUS_ENACTED = Symbol('VOTE_STATUS_ENACTED')
export const VOTE_STATUS_PENDING_ENACTMENT = Symbol(
  'VOTE_STATUS_PENDING_ENACTMENT'
)