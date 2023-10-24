import { IndexView, InputView, ResultView } from ".";
import { clearArrayFromEmptyValues } from "../helpers";

export function getValidView(url: string):JSX.Element {
    const crumbs = clearArrayFromEmptyValues(url.split('/'))
    if (crumbs.includes('input')) {
        return <InputView />
    }
    if (crumbs.includes('result')) {
        return <ResultView />
    }
    return <IndexView />
}