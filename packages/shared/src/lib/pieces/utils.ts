type PackageInfoParams = {
  pieceName: string;
  pieceVersion: string;
}

export const getPackageNameForPiece = (params: PackageInfoParams): string => {
  const { pieceName } = params;

  return `@activepieces/piece-${pieceName}`
}

export const getPackageAliasForPiece = (params: PackageInfoParams): string => {
  const { pieceName, pieceVersion } = params;

  return `@activepieces/piece-${pieceName}-${pieceVersion}`
}
