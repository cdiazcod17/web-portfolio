import { db } from "@/firebase/config.js"
import {
    doc,
    addDoc,
    collection,
    getDocs,
    deleteDoc,
    updateDoc
} from "firebase/firestore"

export let guardar = async (datos, categoria) => {
    try {
        let docRef = await addDoc(collection(db, categoria), datos)
        return { ok: true, id: docRef.id }
    } catch (error) {
        return { ok: false, error: error.message }
    }
}

export const getData = async (categoria) => {
    try {
        const tabla = []
        const consulta = await getDocs(collection(db, categoria))
        consulta.forEach((doc) => {
            tabla.push({ id: doc.id, ...doc.data() })
        })
        
        return {
            ok: true,
            datos: tabla
        }
    } catch (error) {
        console.error(error)
        return {
            ok: false,
            error: error.message
        }
    }
}

export const eliminar = async (id, categoria) => {
    try {
        await deleteDoc(doc(db, categoria, id))
        return { ok: true }
    } catch (error) {
        return { ok: false, error: error.message }
    }
}

export const actualizar = async (id, categoria, datos) => {
    try {
        await updateDoc(doc(db, categoria, id), datos)
        return { ok: true }
    } catch (error) {
        return { ok: false, error: error.message }
    }
}