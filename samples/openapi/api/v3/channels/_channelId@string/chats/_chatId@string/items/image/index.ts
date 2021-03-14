/* eslint-disable */
import type { ReadStream } from 'fs'
import * as Types from '../../../../../../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200

    resBody: {
      id: string
    }

    reqFormat: FormData

    reqBody: {
      file: File | ReadStream
      caption?: string
      headline?: string
      published?: boolean
      formattedText?: string
    }
  }
}
