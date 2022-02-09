from matplotlib import pyplot as plt
import seaborn as sns
import plotly_express as px

iris = sns.load_dataset('iris')

#histograms
sns.displot(iris, x='petal_length', hue='species', legend=True, bins=60,
            palette=dict(setosa='#9b59b6', virginica='#3498db', versicolor='#95a5a6'))
plt.suptitle('petal_length of all',
             fontsize=15, fontweight="bold", color="black",)

plt.savefig('2.png')
plt.show()