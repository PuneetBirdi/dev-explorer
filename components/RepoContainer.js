
import RepoCard from './RepoCard'
import {H3} from '../components/typography'

const RepoContainer = ({title, repos, type}) => {
   return (
      <div className="flex flex-col mt-6">
      <div className="flex items-center space-x-1">
         {
            type === 'pinned' ?
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg> :
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
         }

        <H3 className='font-black'>{title}</H3>
      </div>
      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-4">
        <RepoCard name='Fake Name' description='Fake description goes here'/>
        <RepoCard name='Fake Name' description='Fake description goes here'/>
        <RepoCard name='Fake Name' description='Fake description goes here'/>
        <RepoCard name='Fake Name' description='Fake description goes here'/>
        <RepoCard name='Fake Name' description='Fake description goes here'/>
      </div>
   </div>
   )
}

export default RepoContainer
