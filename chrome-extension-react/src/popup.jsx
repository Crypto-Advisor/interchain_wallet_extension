import React from "react";
import { createRoot } from 'react-dom/client';
import Wallet from "./components/wallet/Wallet";

const container = document.getElementById('react-target');
const root = createRoot(container);

root.render(
    <div>
        <div>
            <h1>StableMask</h1>
        </div>
        <Wallet />
    </div>
)
