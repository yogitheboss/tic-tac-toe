#include <stdio.h>
int Acer(int m, int n)
{
    if (m == 0)
    {
        return n + 1;
    }
    else if (m > 0 && n == 0)
    {
        return Acer(m - 1, 1);
    }
    else if (m > 0 && n > 0)
    {
        return Acer(m - 1, Acer(m, n - 1));
    }
}
int main()
{
    int Acrsum, n, m;
    scanf("%d,%d", &n, &m);

    Acrsum = Acer(n, m);
    printf("%d", Acrsum);
}