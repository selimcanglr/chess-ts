import Bishop from "../chess/pieces/Bishop";
import King from "../chess/pieces/King";
import Knight from "../chess/pieces/Knight";
import Pawn from "../chess/pieces/Pawn";
import Piece from "../chess/pieces/Piece";
import Queen from "../chess/pieces/Queen";
import Rook from "../chess/pieces/Rook";
import { FileType, RankType } from "../components/Board";


export const INITIAL_PIECE_POSITIONS: Record<RankType, Record<FileType, typeof Piece | undefined>> = {
    1: {
        'a': Rook,
        'b': Knight,
        'c': Bishop,
        'd': Queen,
        'e': King,
        'f': Bishop,
        'g': Knight,
        'h': Rook,
    },
    2: {
        'a': Pawn,
        'b': Pawn,
        'c': Pawn,
        'd': Pawn,
        'e': Pawn,
        'f': Pawn,
        'g': Pawn,
        'h': Pawn,
    },
    3: {
        'a': undefined,
        'b': undefined,
        'c': undefined,
        'd': undefined,
        'e': undefined,
        'f': undefined,
        'g': undefined,
        'h': undefined,
    },
    4: {
        'a': undefined,
        'b': undefined,
        'c': undefined,
        'd': undefined,
        'e': undefined,
        'f': undefined,
        'g': undefined,
        'h': undefined,
    },
    5: {
        'a': undefined,
        'b': undefined,
        'c': undefined,
        'd': undefined,
        'e': undefined,
        'f': undefined,
        'g': undefined,
        'h': undefined,
    },
    6: {
        'a': undefined,
        'b': undefined,
        'c': undefined,
        'd': undefined,
        'e': undefined,
        'f': undefined,
        'g': undefined,
        'h': undefined,
    },
    7: {
        'a': Pawn,
        'b': Pawn,
        'c': Pawn,
        'd': Pawn,
        'e': Pawn,
        'f': Pawn,
        'g': Pawn,
        'h': Pawn,
    },
    8: {
        'a': Rook,
        'b': Knight,
        'c': Bishop,
        'd': Queen,
        'e': King,
        'f': Bishop,
        'g': Knight,
        'h': Rook,
    },
}