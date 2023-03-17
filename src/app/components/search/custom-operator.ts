import { debounceTime, distinctUntilChanged, filter, Observable, OperatorFunction } from "rxjs";

// Valores Default
const DEFAULT_TIME = 500

// Custom Operator in RxJS
// Podemos combinar varios operadores en uno solo. Esto solo en caso de ser necesario.
export function customOperator<T>(
    filterFn: (value: T) => boolean, 
    debounceTimeFn: number,
    distinctFn: (value: T, otherValue: T) => boolean
): OperatorFunction<T, T> {
    return (source: Observable<T>) => 
        source.pipe(
            filter(filterFn),
            debounceTime(debounceTimeFn || DEFAULT_TIME),
            distinctUntilChanged(distinctFn)
        )
}