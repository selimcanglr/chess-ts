import { INITIAL_PIECE_POSITIONS } from "../utils/constants"

export type FileType = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h'
export type RankType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
type TileColor = 'white' | 'black'
interface TileProps {
    color: TileColor,
    file: FileType,
    rank: RankType,
    chessFigure?: React.ReactNode,
}

interface BoardProps {

}

const Tile = ({color, file, rank, chessFigure}: TileProps) => {
    const colorClass = color == 'white' ? 'bg-gray-50' : 'bg-green-700' 
    
    return (
        <div 
            className={`${colorClass} w-24 h-24`} 
            id={`${file}${rank}`}
        >
            {chessFigure}
        </div>
    )
}

const Board = () => {
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
                                        />
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