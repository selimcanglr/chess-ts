
export type FileType = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h'
export type RankType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export enum PieceEnum {
    Rook,
    Knight,
    Bishop,
    Queen,
    King,
    Pawn
}

export type BoardType = Record<RankType, Record<FileType, PieceEnum | undefined>>

