import { IndexView, InputView, ResultView } from "../views"
import { filterArrayFromEmpty } from "../shared"
import { ROUTES } from "../shared/lib/constants"

export function getValidView(url: string): string {
    const crumbs = filterArrayFromEmpty(url.split('/'))
    switch (crumbs[0]) {
        case ROUTES.INPUT:
            return InputView
        case ROUTES.RESULT:
            return ResultView
        default:
            return IndexView;
    }
}
