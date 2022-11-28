import { useState } from 'react'
import { PieceColor } from "."
import { PieceEnum } from "../../types/types"

const Piece = (pieceType: PieceEnum | undefined, pieceColor: PieceColor) => {
    switch (pieceType) {
        case PieceEnum.King:
            return
        case PieceEnum.Queen:
            return
        case PieceEnum.Bishop:
            return
        case PieceEnum.Knight:
            return
        case PieceEnum.Rook:
            return       
        case PieceEnum.Pawn:
            return           
        default:
            return <></>
    }
}
 
export default Piece;