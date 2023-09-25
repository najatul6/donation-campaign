const Banner = () => {
    return (
        <div className="">

            <div className="h-[70vh] flex flex-col gap-10 justify-center items-center">
                <h2 className="text-4xl font-bold">I Grow By Helping People In Need</h2>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search here...." className="input input-bordered" />
                        <button className="btn bg-[#FF444A] py-4 px-7 font-semibold text-white hover:bg-none">
                        Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;