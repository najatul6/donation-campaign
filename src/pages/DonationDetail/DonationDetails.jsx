import swal from "sweetalert";

const DonationDetails = ({ donationCard }) => {
    const { id, title, description, img, price, text_color } = donationCard;

    const handleDonate = () => {
        const storedDonationsItem = [];
        const donationsItem = JSON.parse(localStorage.getItem('donations'))
        if (!donationsItem) {
            storedDonationsItem.push(donationCard)
            localStorage.setItem('donations', JSON.stringify(storedDonationsItem))
            swal("Good job!", "Your Donation is Succesfully!", "success");
        }
        else {
            const isExits = donationsItem.find(donationCard => donationCard.id === id)

            if (!isExits) {
                storedDonationsItem.push(...donationsItem, donationCard)
                localStorage.setItem('donations', JSON.stringify(storedDonationsItem))
                swal("Good job!", "Your Donation is Succesfully!", "success");
            }
            else {
                swal("Opps!", "You Already Donated!", "error");
            }

        }
        // console.log(donationCard)
        localStorage.setItem()
    }

    return (
        <div>
            <div className="mt-14 relative">
                <div className="absolute bottom-0 w-full bg-[#0B0B0B40] px-2 py-5">
                    <button onClick={handleDonate} style={{ backgroundColor: text_color }} className="text-xl font-semibold text-white py-4 px-6 rounded-lg">Donate $ {price}</button>
                </div>
                <img className="w-full" src={img} alt={`${title}`} />
            </div>

            <div className="py-5">
                <h2 className="text-4xl font-bold">{title}</h2>
                <p className="text-gray-600 mt-6">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default DonationDetails;