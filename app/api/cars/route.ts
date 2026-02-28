// app/api/users/route.js

import { NextResponse, NextRequest } from "next/server";

export async function GET(request,response){

    const cars=[
        {"name":"swift","type":"hatchback","price":870000},
        {"name":"dzire","type":"sedan","price":980000},
        {"name":"ciaz","type":"sedan","price":1100000},
        {"name":"baleno","type":"hatchback","price":880000},
        {"name":"fronx","type":"hatchback","price":1150000},
        {"name":"brezza","type":"suv","price":1250000},
        {"name":"grand vitara","type":"suv","price":1990000},
        {"name":"invicto","type":"mpv","price":2990000},
        {"name":"alto","type":"hatchback","price":380000},
        {"name":"s presso","type":"hatchback","price":350000},
        {"name":"wagon r","type":"hatchback","price":500000},
        {"name":"jimny","type":"suv","price":1400000}
    ];

    return NextResponse.json(cars);
}
