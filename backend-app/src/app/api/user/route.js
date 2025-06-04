let users = [
  {
    id: 1,
    name: "Jay",
  },
  {
    id: 2,
    name: "Raj",
  },
  {
    id: 3,
    name: "Neha",
  },
  {
    id: 4,
    name: "Komal",
  },
  {
    id: 5,
    name: "Ankit",
  },
];

// get all users
export function GET(request) {
  return new Response(
    JSON.stringify({ message: "GET request received", data: users }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}


// create a user
export async function POST(request) {
  const body = await request.json();
  if (body.name) {
    const newUser = {
      id: Date.now(),
      name: body.name,
    };

    users.push(newUser);

    return new Response(
      JSON.stringify({
        message: `User ${body.name} created successfully`,
        data: newUser,
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

// update a user
export async function PUT(request) {
    const body = await request.json();

    if(body.id && body.name) {
        const userIdex = users.findIndex((user) => body.id === user.id);

        users[userIdex] = {
            id: body.id,
            name: body.name
        };

        return new Response(
            JSON.stringify({
                message: "User updated successfully",
                data: users[userIdex]
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
    }
}

// delete a user
export async function DELETE(request) {
    const body = await request.json();

    if(body.id) {
        const userIndex = users.findIndex((user) => user.id === body.id);
        const deletedUser = users[userIndex];
        users.splice(userIndex, 1);

        return new Response(
            JSON.stringify({
                message: "User deleted successfully",
                data: deletedUser
            }),
            {
                headers: {
                    status: 200,
                    "Content-Type": "application/json"
                }
            }
        )
    }
}