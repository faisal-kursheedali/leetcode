class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        result = []
        for i in range(1,n+1):
            # val = "Fizz" if i%3 ==0 else  "Buzz" if i%5 ==0 else "FizzBuzz" if (i%3 ==0 and i%5==0) else f"{i}"
            val = "FizzBuzz" if (i%3 ==0 and i%5==0) else "Fizz" if i%3 ==0 else  "Buzz" if i%5 ==0 else f"{i}"
            result = [*result, val]
        return result
        