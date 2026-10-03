interface Search {
    searchQuery: string,
    setsearchQuery: (value: string)=> void;
}
function Search({searchQuery, setsearchQuery}: searchProps){
    return(
        <div>
            <input
            type="text"
            placeholder="Tim kiem san pham..." 
            onChange={(e)=> setsearchQuery(e.target.value)} 
            value={searchQuery} 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
    )
}
export default Search