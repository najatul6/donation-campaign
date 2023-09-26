
const Banner = ({ handlerSearchButton }) => {
    return (
        <div className="">
            <div className="min-h-[70vh] flex justify-center items-center">
                <div className="space-y-7">
                    <h2 className="text-3xl font-bold">I Grow By Helping People In Need</h2>
                    <div className="form-control">
                        <div className="input-group">
                            <input id="search-box" type="text" placeholder="Search here...." className="input input-bordered" />
                            <button onClick={handlerSearchButton} className="btn bg-[#FF444A] py-4 px-7 font-semibold text-white hover:bg-none">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;