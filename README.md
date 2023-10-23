# pyatnashki
Для публикации решения игры "Пятнашки".

Базовым является задание на решение игры «Пятнашки» (15 фишек, поле 4x4), однако при возникновении сложностей с решением можно для начала попробовать найти решение для игры «8» (то же самое, фишки от 1 до 8, поле 3x3).

Напоминаю, что половина позиций являются нерешаемыми, условие решаемости позиции можно найти по ссылке выше.

Общая схема работы программы выглядит следующим образом:

Пользователь вводит начальную расстановку. Для «15» начальную расстановку удобно задавать в шестнадцатеричном виде, где 0 – пустая ячейка, значения от 1 до F соответствуют фишкам с номерами от 1 до 15. Собранная позиция – 123456789ABCDEF0.
Программа проверяет введённую расстановку, и указывает, является ли она решаемой (если нет, то выход).
Ищем решение – минимальная по длине последовательность ходов, приводящая к решению (если находится не минимальная по длине последовательность, то решение не засчитывается!).
Выдаётся решение, по ходам, после каждого хода указывать очередную полученную позицию. Т.к. решения могут содержать довольно большое число ходов (поищите, чему равно «Число Бога» для «Пятнашек»), решение можно выводить не в консоль, а в текстовый файл.
Самое главное – алгоритмы: BFS, DFS, IDS, A* и IDA* (на начало выполнения задания могут быть изучены не все алгоритмы). Однако помните, что неинформированные алгоритмы поиска для большинства начальных позиций просто не будут находить решений. Проанализируйте и дайте оценку применимости каждого алгоритма от количества ходов.
Эвристики для A* и IDA* посмотреть в интернете, как минимум брать «Манхеттенское расстояние», можно добавить линейные и угловые конфликты. Проверять рекомендую на довольно простых начальных позициях, у которых первые две строки уже собраны.

Всякая фигня наподобие «Я запрограммировал так, как человек решает!», т.е. последовательное размещение фишек на их местах – приниматься не будет ни в каком виде! Программа как минимум должна находить оптимальное решение одним из алгоритмов, указанных выше.

Алгоритмы BFS, DFS, IDS должны быть выполнены на паре.

