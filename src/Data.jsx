import React, { useState } from 'react'

function Data() {
    const data = [
        {
            id: 1,
            name: "Alice",
            email: "alice.smith@example.com",
            phoneNumber: "123-456-7890"
        },
        {
            id: 2,
            name: "Bob Johnson",
            email: "bob.j@example.com",
            phoneNumber: "987-654-3210"
        },
        {
            id: 3,
            name: "Charlie Brown",
            email: "charlie.b@example.com",
            phoneNumber: "555-123-4567"
        },
        {
            id: 4,
            name: "Diana Prince",
            email: "diana.p@example.com",
            phoneNumber: "111-222-3333"
        },
        {
            id: 5,
            name: "Ethan Hunt",
            email: "ethan.h@example.com",
            phoneNumber: "444-555-6666"
        }
    ]

    const [user, setUser] = useState([...data])

    let keys = Object.keys(user[0])
    return (
        <div>
            <table>
                <thead>
                    {keys.map((key) => (
                        <th key={key}>{key.toUpperCase()}</th>
                    ))}
                </thead>

                <tbody>

                    {user?.map((v, i) => {
                        return <tr key={v.id}>
                            <td>{v?.id}</td>
                            <td>{v?.name}</td>
                            <td>{v?.email}</td>
                            <td>{v?.phoneNumber}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Data