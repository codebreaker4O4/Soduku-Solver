#include<bits/stdc++.h>
using namespace std;
#define ll long long
#define mod 1000000007
#define endl '\n'


int main(){
    std::ios_base::sync_with_stdio(false);
    int n;
    vector<vector<int>> board(n, vector<int>(n));
    board={
        {1,2,3,4,5,6,7,8,9},
        {2,3,4,5,6,7,8,9,1},
        {3,4,5,6,7,8,9,1,2},
        {4,5,6,7,8,9,1,2,3},
        {5,6,7,8,9,1,2,3,4},
        {6,7,8,9,1,2,3,4,5},
        {7,8,9,1,2,3,4,5,6},
        {8,9,1,2,3,4,5,6,7},
        {9,1,2,3,4,5,6,7,8},
    }
    return 0;
}
