// Piece SVG's from:
// By Cburnett - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=1499813
import { useState } from 'react'
import { TileColor, TileState } from '.'
import { FileType, RankType } from '../../types/types'
import { INITIAL_PIECE_POSITIONS } from "../../utils/constants"
import Tile from './Tile'

interface BoardProps {
    invert?: boolean
}

interface TilePosition {
    file: FileType | undefined,
    rank: RankType | undefined,
}


const Board = ({invert}: BoardProps) => {
    // Invert feature 
    // TODO: Move the piece inside tile, handle actions when Tile is clicked.
    // Set the state of Tile on onClick events, determine the look of the piece and 
    // the tile based on the state of the tile.
    const [selectedTile, setSelectedTile] = useState<TilePosition>({
        file: undefined,
        rank: undefined,
    }) 

    const getTileState = (currentFile: FileType, currentRank: RankType): TileState => {
        if (selectedTile.file === currentFile 
            && selectedTile.rank === currentRank)  {
                return 'selected'
        }
        else {
            return 'base'
        }
    }

    const onTileClick = (e: React.MouseEvent) => {
        setSelectedTile({
            file: e.currentTarget.id[0] as FileType,
            rank: e.currentTarget.id[1] as unknown as RankType,
        })
    }

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
                                                tileColor={tileColor}
                                                tileState={getTileState(file as FileType, rank as RankType)}
                                                file={file as FileType}
                                                rank={rank as RankType}
                                                pieceType={files[file as FileType]}
                                                pieceColor='black'
                                                onClick={onTileClick}
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