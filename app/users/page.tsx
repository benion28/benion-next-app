import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' }) // Don't use Cache, always fetch
    // const response = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 10 } }) // Refresh data every 10secs
    const users: User[] = await response.json()
  return (
    <div>
        <a href='/'>Home</a>
        <h1>Users ({`${new Date().toDateString()} -- ${new Date().toLocaleTimeString()}`}):</h1>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                { users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default UsersPage