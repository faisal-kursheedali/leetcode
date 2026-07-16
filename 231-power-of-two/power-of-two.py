class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if n <= 0:
            return False
        for i in range(n):
            value = 2**i
            if value < n:
                continue
            else:
                return True if value == n else False
        