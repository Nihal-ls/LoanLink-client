import React from 'react';

const ApplicationTableModal = ({loan}) => {
    return (
        <div>
            <dialog id={`my_modal_${loan._id}`} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{loan.loanTitle}</h3>
                    <h3 className="font-bold text-lg">{loan.interestRate}</h3>
                    <h3 className="font-bold text-lg">Requesters First Name: {loan.firstName}</h3>
                    <h3 className="font-bold text-lg">Requesters Last Name: {loan.lastName}</h3>
                    <h3 className="font-bold text-lg">Requesters Last Name: {loan.email}</h3>

                    <h3 className="font-bold text-lg">Requesters contact Number: {loan.contactNumber}</h3>
                    <h3 className="font-bold text-lg">Requesters document Number:{loan.documentNumber}</h3>
                    <h3 className="font-bold text-lg">Requesters income source:{loan.incomeSource}</h3>
                    <h3 className="font-bold text-lg">Requesters Monthly Income:{loan.monthlyiNCOME}</h3>
                    <h3 className="font-bold text-lg">Requesters loanAmount:{loan.loanAmount}</h3>
                    <h3 className="font-bold text-lg">Requesters Address:{loan.address}</h3>
                    <h3 className="font-bold text-lg">Extra Note:{loan.extraNotes}</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ApplicationTableModal;