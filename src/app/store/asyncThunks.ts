import { createAsyncThunk } from "@reduxjs/toolkit";

const delay = (ms:number) => new Promise(res => setTimeout(res, ms));

export const getName = createAsyncThunk(
    "AppState/getName",
    async (id: string) => {
        console.log('ID:' + id)
        await delay(2000);
        return { name: 'Shaik Mohammed Bilal' }
    }
)