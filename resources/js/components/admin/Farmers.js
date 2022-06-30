import React, { useState } from "react";
import Input from "../../UI/input";

function Farmers() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");

    return (
        <div className="row mt-5 mb-5">
            <div className="col-md-4">
                <div className="card py-5 px-3 shadow">
                    <form action="">
                        <h4 className="text-center">Farmer Details</h4>
                        <Input
                            label_id={"firstname"}
                            label={"First Name"}
                            type={"text"}
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        <Input
                            label_id={"lastname"}
                            label={"Last Name"}
                            type={"text"}
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        <Input
                            label_id={"address"}
                            label={"Address"}
                            type={"text"}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <Input
                            label_id={"email"}
                            label={"Email"}
                            type={"email"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            label_id={"password"}
                            label={"Password"}
                            type={"password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Input
                            label_id={"password_confirmation"}
                            label={"Password Confirmation"}
                            type={"password"}
                            value={password_confirmation}
                            onChange={(e) =>
                                setPasswordConfirmation(e.target.value)
                            }
                        />
                        <div class="d-grid gap-2">
                            <button className="btn btn-primary">SAVE</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-8">
                <table class="table">
                    <thead class="table-dark">
                        <tr>
                            <th className="py-3 px-2">First Name</th>
                            <th className="py-3 px-2">Last Name</th>
                            <th className="py-3 px-2">Email</th>
                            <th className="py-3 px-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>No Data</tbody>
                </table>
            </div>
        </div>
    );
}

export default Farmers;
