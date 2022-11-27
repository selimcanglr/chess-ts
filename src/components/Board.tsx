// Piece SVG's from:
// By Cburnett - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=1499813
import { ReactComponent as BlackPawn } from '../assets/svg/pieces/black-pawn.svg'
import { FileType, RankType } from '../types/types'
import { INITIAL_PIECE_POSITIONS } from "../utils/constants"

type TileColor = 'white' | 'black'
interface TileProps {
    color: TileColor,
    file: FileType,
    rank: RankType,
    onClick?: React.MouseEventHandler
    children?: React.ReactNode,
}

interface BoardProps {
    invert?: boolean
}

const Tile = ({color, file, rank, children}: TileProps) => {
    const colorClass = color == 'white' ? ('bg-gray-50') : ('bg-green-700') 
    
    return (
        <div 
            className={`${colorClass} lg:h-20 lg:w-20 md:w-16 md:h-16 sm:w-14 sm:h-14 h-10 w-10`} 
            id={`${file}${rank}`}
        >
            <div className='h-full flex justify-center items-center'>
                {children}
            </div>
        </div>
    )
}

const Board = ({invert}: BoardProps) => {
    return (
        <div className="flex h-screen items-center justify-center">
            {
                Object.keys(INITIAL_PIECE_POSITIONS).map((rank: unknown, index) => {
                    const files = INITIAL_PIECE_POSITIONS[rank as RankType]
                    let tileColor: TileColor = index % 2 === 0 ? 'white' : 'black'
                    return (
                        <div className="flex flex-col">
                            {
                                Object.keys(files).map((file: unknown, index) => {
                                    tileColor = tileColor === 'white' ? 'black' : 'white'
                                    return (
                                            <Tile
                                                key={`${file}${rank}`}
                                                color={tileColor}
                                                file={file as FileType}
                                                rank={rank as RankType}
                                            >
                                                <BlackPawn className='lg:scale-150 md:scale-125 sm:scale-100 scale-75'/>
                                            </Tile>
                                        )
                                })
                            }
                        </div>
                        )
                    })
            }
        </div>
    )
}
 
export default Board;