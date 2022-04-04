import { FC } from "react";
import { InputBaseProps } from "@mui/material/InputBase";
export declare type SearchType = "searchString" | "id";
export interface SearchBoxProps extends InputBaseProps {
    translationText?: {
        SearchPlaceholder?: string;
        SearchById?: string;
        Clear?: string;
        SearchByName?: string;
        AdvanceSearch?: string;
    };
    defaultValue?: string;
    includeSearchById?: boolean;
    onSearch: (searchType: SearchType, searchString: string) => void;
    onClickAdvancedSearch?(): void;
}
declare const SearchBox: FC<SearchBoxProps>;
export default SearchBox;
