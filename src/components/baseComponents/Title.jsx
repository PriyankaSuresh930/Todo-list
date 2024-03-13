import {convertToUpperCase} from '../baseComponents/Common';

const Title = ({data}) => {
    const {Title} = data;
  return (
   <h2 className='py-3 text-center'>{convertToUpperCase(Title)}</h2>
  )
}

export default Title