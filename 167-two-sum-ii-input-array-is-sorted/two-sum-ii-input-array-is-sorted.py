class Solution(object):
    def twoSum(self, numbers, target):
        """
        :type numbers: List[int]
        :type target: int
        :rtype: List[int]
        """
        i = 0
        j = len(numbers) -1 
        while ( i < j):
            total = numbers[i] + numbers[j]
            if (total == target):
                break
            elif(total < target):
                i = i +1
            else:
                j = j -1
        return [i+1, j+1]  
        