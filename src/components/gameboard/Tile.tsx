import { FileType, PieceEnum, RankType } from '../../types/types'
import { PieceColor, TileColor, TileState } from './index'
import Piece from './Piece'

interface TileProps {
    tileColor: TileColor,
    tileState: TileState,
    file: FileType,
    rank: RankType,
    pieceType: PieceEnum | undefined,
    pieceColor: PieceColor,
    onClick?: React.MouseEventHandler,
}

const Tile = ({tileColor, tileState, file, rank, pieceType, pieceColor, onClick}: TileProps) => {
    const colorClass = tileColor == 'white' ? ( tileState === 'base' ? 'bg-gray-50' : 'bg-gray-200') : (tileState === 'base' ? 'bg-green-700' : 'bg-green-900') 

    return (
        <div 
            onClickCapture={onClick}
            className={`${colorClass} lg:h-20 lg:w-20 md:w-16 md:h-16 sm:w-14 sm:h-14 h-10 w-10`} 
            id={`${file}${rank}`}
        >
            <div 
                className='h-full flex justify-center items-center'
            >
                <Piece
                    pieceType={pieceType}
                    pieceColor={pieceColor}
                >
                </Piece>
            </div>
        </div>
    )
}

export default Tile