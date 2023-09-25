import { useEffect } from "react";
import { useState } from "react";
import Donate from "./Donate";

const Donation = () => {
    const [donate, setDonate] = useState([]);
    const [noDataFound, setNoDataFound] = useState(false);
    const [isBtnShow, setIsBtnShow] = useState(false);
    useEffect(() => {
        const donationsItem = JSON.parse(localStorage.getItem('donations'))
        if (donationsItem) {
            setDonate(donationsItem)
        }
        else {
            setNoDataFound("No Data Found")
        }
    }, [])
    return (
        <div>
            {
                noDataFound ? <p className="h-screen flex justify-center items-center text-2xl font-bold">{noDataFound}</p>
                    :
                    <div className="py-14">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {
                                isBtnShow ? donate.map((donate) => (<Donate key={donate.id} donate={donate}></Donate>)) :
                                    donate.slice(0, 4).map((donate) => (<Donate key={donate.id} donate={donate}></Donate>))
                            }
                        </div>
                        {
                            donate.length > 4 && <button onClick={() => setIsBtnShow(!isBtnShow)} className="py-4 px-7 block mx-auto  bg-[#009444] font-semibold text-white rounded-xl mt-9">{isBtnShow ? "See Less" : "See More"}</button>
                        }
                    </div>

            }
        </div>
    );
};

export default Donation;