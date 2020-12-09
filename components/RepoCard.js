
const RepoCard = ({name}) => {
   return (
      <a href="item.url" class="hover:bg-purple-700 hover:border-transparent hover:shadow-none group block rounded-lg p-4 border border-gray-200 shadow-md">
         <dl>
            <dt className='font-bold group-hover:text-white'>{name}</dt>
            <dt className="text-xs text-gray-400 group-hover:text-gray-100">October 2, 2020</dt>
            <dd className='text-sm group-hover:text-gray-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolorum!</dd>
         </dl>
      </a>
   )
}

export default RepoCard
