import classNames from 'classnames'
import { NextPage } from "next";

// Props interface
interface Props {
    content: string;
    isSelected: boolean;
    setSelectedTab: Function;
  }


const Tab: NextPage<Props> = ({content, isSelected, setSelectedTab}) => (
    <button onClick={() => setSelectedTab(content)} className={classNames("pr-4 lg:pr-24", {"text-darkgrey": !isSelected})}>
        {content}
    </button>
  
)


export default Tab