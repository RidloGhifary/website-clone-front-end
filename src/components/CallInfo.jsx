import { Icon, Button } from "semantic-ui-react"

const CallInfo = () => {
  return (
    <div className="w-full p-3 bg-[#222]">
      <div className="px-5 flex flex-wrap mx-auto justify-between items-center">
        {/* SOCIAL MEDIA */}
        <div className="flex justify-center items-center mx-auto mb-3 md:mb-0 gap-3">
          <a className="bg-gray-500 mx-auto rounded-full p-3 text-[15px]">
            <Icon name='facebook f' className="text-slate-300 rounded-full pl-1" />
          </a>
          <a className="bg-gray-500 mx-auto rounded-full p-3 text-[15px]">
            <Icon name='twitter' className="text-slate-300 rounded-full pl-1" />
          </a>
          <a className="bg-gray-500 mx-auto rounded-full p-3 text-[15px]">
            <Icon name='mail' className="text-slate-300 rounded-full pl-1" />
          </a>
          <a className="bg-gray-500 mx-auto rounded-full p-3 text-[15px]">
            <Icon name='linkedin' className="text-slate-300 rounded-full pl-1" />
          </a>
          <a className="bg-gray-500 mx-auto rounded-full p-3 text-[15px]">
            <Icon name='youtube' className="text-slate-300 rounded-full pl-[2px]" />
          </a>
        </div>
         
        {/* PHONE NUMBER */}
        <div className="flex justify-center items-center mx-auto gap-3">
          <a className="text-white font-semibold">
            <Icon name="phone" color="green" />
            +1 (222)-999-233
          </a>
          <a className="text-white font-semibold">
            <Icon name="phone" color="green" />
            +1 (222)-999-234
          </a>
          <Button positive>CALL ME BACK</Button>
        </div>
      </div>
    </div>
  )
}

export default CallInfo