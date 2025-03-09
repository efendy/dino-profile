import { FC } from 'react'
import { BellAlertIcon, GiftIcon, InformationCircleIcon, NewspaperIcon } from '@heroicons/react/20/solid'
import { Feed } from '@/data/feed'
import { timeAgo } from '@/utils/date'

interface Props {
  activity: Feed[]
}

const ListFeeds: FC<Props> = ({activity}) => {
  
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id}>
            <div className="relative pb-8">
              {activityItemIdx !== activity.length - 1 ? (
                <span aria-hidden="true" className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" />
              ) : null}
              <div className="relative flex items-start space-x-3">
                <div>
                  <div className="relative px-1">
                    {activityItem.type === 'news' ? (
                      <div className="flex size-8 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white">
                        <NewspaperIcon aria-hidden="true" className="size-5 text-blue-500" />
                      </div>
                    ) : activityItem.type === 'alert' ? (
                      <div className="flex size-8 items-center justify-center rounded-full bg-rose-100 ring-8 ring-white">
                        <BellAlertIcon aria-hidden="true" className="size-5 text-rose-500" />
                      </div>
                    ) : activityItem.type === 'promotion' ? (
                      <div className="flex size-8 items-center justify-center rounded-full bg-emerald-100 ring-8 ring-white">
                        <GiftIcon aria-hidden="true" className="size-5 text-emerald-500" />
                      </div>
                    ) : (
                      <div className="flex size-8 items-center justify-center rounded-full bg-amber-100 ring-8 ring-white">
                        <InformationCircleIcon aria-hidden="true" className="size-5 text-amber-500" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  {/* <div>
                    <div className="text-sm font-medium text-gray-900">
                      {activityItem.type}
                    </div>
                  </div> */}
                  <div className="mt-2">
                    <p className="text-sm text-gray-700">{activityItem.message}</p>
                    <p className="mt-0.5 text-sm text-gray-500">{timeAgo(activityItem.time)}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListFeeds