import type { FC } from 'react'

export const OperationCard: FC = () => {
  return (
    <div className="flex justify-between p-4 rounded-md shadow-sm bg-slate-200">
      <div>
        <h3 className="text-xl font-medium">Chucherias</h3>
        <span className="font-mono">2022/06/26</span>
      </div>

      <div>
        <div className="font-mono text-xl font-medium text-right text-red-600">-$78</div>
        <h4 className="text-right">Ocio</h4>
      </div>
    </div>
  )
}
