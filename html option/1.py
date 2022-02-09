from matplotlib import pyplot as plt
import seaborn as sns
import plotly_express as px

iris = sns.load_dataset('iris')
#scatter plot

sns.lmplot(x='sepal_length', y='petal_length',
           data=iris, fit_reg=False, hue='species', legend=True,
           palette=dict(setosa='#9b59b6', virginica='#3498db', versicolor='#95a5a6'))
plt.suptitle('sepal length & petal length',
             fontsize=15, fontweight="bold", color="black",)
plt.savefig('1.png',bbox_inches='tight')
plt.show()
print(iris)