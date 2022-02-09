from sklearn import datasets
import pandas as pd
from matplotlib import pyplot as plt
from collections import Counter
from mpl_toolkits.mplot3d import axes3d
from matplotlib import style

df = pd.read_csv("iris.csv")

colours = ['#9b59b6', '#3498db', '#95a5a6']
species = ['setosa', 'versicolor', 'virginica']

se = 0
ve = 0
vi = 0

for i in df['class']:
    if i == 'Iris-setosa':
        se = se + 1
    elif i =='Iris-versicolor':
        ve = ve + 1
    else:
        vi = vi + 1

sizes = [se, ve, vi]
explode = (0.1, 0.05, 0.05)
plt.pie(sizes, explode=explode, labels=species, colors=colours,
autopct='%1.1f%%', shadow=True, startangle=140)
plt.axis('equal')
plt.title('number of each type', fontsize=15, fontweight="bold", color="black",)
plt.legend(title="class")
plt.savefig('3.png', bbox_inches='tight')
plt.show()